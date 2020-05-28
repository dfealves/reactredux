export function toggleLesson(lesson, module) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson,
  };
}