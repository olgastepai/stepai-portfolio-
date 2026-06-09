/**
 * @file app.js
 * @description Интерфейс HTML-версии: режимы, формы, скачивание TXT, печать.
 * Банк тем загружается из data/lesson-bank.json (полные тексты) при работе через локальный сервер.
 */

const LESSON_TYPES = [
  "Изучение нового материала",
  "Комбинированный урок",
  "Повторение и закрепление",
  "Практическая работа",
];

const DURATIONS = ["40 минут", "45 минут"];
const GRADES = ["6 класс", "7 класс", "8 класс", "9 класс"];

/** Текущий режим: bank | custom */
let currentMode = "bank";

/** Загруженный банк тем */
let lessonBank = null;

function $(id) {
  return document.getElementById(id);
}

function fillSelect(selectEl, options, selectedValue) {
  selectEl.innerHTML = "";
  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt;
    o.textContent = opt;
    if (opt === selectedValue) o.selected = true;
    selectEl.appendChild(o);
  });
}

/**
 * Загрузка банка: JSON (полный) → иначе встроенный LESSON_BANK из lesson-bank.js
 */
async function loadLessonBank() {
  try {
    const res = await fetch("data/lesson-bank.json");
    if (res.ok) return await res.json();
  } catch (_) {
    /* file:// или сервер не запущен */
  }
  if (typeof LESSON_BANK !== "undefined") return LESSON_BANK;
  return null;
}

function showLoadError() {
  $("load-error").classList.remove("hidden");
  $("app-main").classList.add("hidden");
}

function initBankTopics() {
  const select = $("bank-topic");
  select.innerHTML = "";
  Object.keys(lessonBank).forEach((title, i) => {
    const o = document.createElement("option");
    o.value = title;
    o.textContent = title;
    if (i === 0) o.selected = true;
    select.appendChild(o);
  });
  updateBankPreview();
}

function updateBankPreview() {
  const topic = $("bank-topic").value;
  $("bank-preview").textContent = lessonBank[topic].short_description;
}

function setMode(mode) {
  currentMode = mode;
  $("panel-bank").classList.toggle("hidden", mode !== "bank");
  $("panel-custom").classList.toggle("hidden", mode !== "custom");
  document.querySelectorAll(".mode-tabs button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  $("result-section").classList.add("hidden");
}

function downloadTxt(text, filename) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function showResult(text) {
  $("lesson-output").value = text;
  $("result-section").classList.remove("hidden");
  $("result-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildBankLesson() {
  const topic = $("bank-topic").value;
  const data = lessonBank[topic];
  const text = buildLessonFromBank(
    topic,
    $("bank-type").value,
    $("bank-duration").value,
    $("bank-grade").value,
    data,
    $("bank-extra").value
  );
  showResult(text);
}

function buildCustomLessonUi() {
  const topic = $("custom-topic").value.trim();
  const material = $("custom-material").value.trim();
  const links = [$("custom-link").value.trim(), $("custom-links").value.trim()]
    .filter(Boolean)
    .join("\n");

  if (!topic) {
    alert("Пожалуйста, введите тему урока.");
    return;
  }
  if (!material) {
    alert("Вставьте текст материала в поле «Материал из источников».");
    return;
  }

  const text = buildCustomLesson(
    topic,
    $("custom-type").value,
    $("custom-duration").value,
    $("custom-grade").value,
    material,
    links
  );
  showResult(text);
}

document.addEventListener("DOMContentLoaded", async () => {
  lessonBank = await loadLessonBank();
  if (!lessonBank) {
    showLoadError();
    return;
  }

  $("load-error").classList.add("hidden");
  $("app-main").classList.remove("hidden");

  initBankTopics();
  fillSelect($("bank-type"), LESSON_TYPES, LESSON_TYPES[0]);
  fillSelect($("bank-duration"), DURATIONS, DURATIONS[0]);
  fillSelect($("bank-grade"), GRADES, "7 класс");
  fillSelect($("custom-type"), LESSON_TYPES, LESSON_TYPES[0]);
  fillSelect($("custom-duration"), DURATIONS, DURATIONS[0]);
  fillSelect($("custom-grade"), GRADES, "7 класс");

  $("bank-topic").addEventListener("change", updateBankPreview);

  document.querySelectorAll(".mode-tabs button").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  $("btn-bank-create").addEventListener("click", buildBankLesson);
  $("btn-custom-create").addEventListener("click", buildCustomLessonUi);
  $("btn-download").addEventListener("click", () => {
    const name =
      currentMode === "bank" ? "urok_iz_banka.txt" : "urok_po_svoey_teme.txt";
    downloadTxt($("lesson-output").value, name);
  });
  $("btn-print").addEventListener("click", () => window.print());

  setMode("bank");
});
