const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const activeTag = filter.dataset.filter;

    filters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");

    projects.forEach((project) => {
      const tags = project.dataset.tags.split(" ");
      const shouldShow = activeTag === "all" || tags.includes(activeTag);
      project.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
