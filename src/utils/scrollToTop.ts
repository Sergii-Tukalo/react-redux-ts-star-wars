const breadcrumb = document.querySelector('.breadcrumb') as HTMLElement;
export const scrollToTop = () => {
  window.scrollTo({
    top: breadcrumb?.offsetTop,
    behavior: 'smooth',
  });
};
