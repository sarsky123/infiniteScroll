export default function(handler, optionArg, observingDOM) {
  const defaultOptions = {
    root: null,
    rootMargins: "0px",
    threshold: 0.5
  };
  let options = Object.assign({}, defaultOptions, optionArg);
  const interSectionHandler = function(entries) {
    if (entries[0].isIntersecting) {
      handler();
    }
  };
  const observer = new IntersectionObserver(interSectionHandler, options);
  observer.observe(observingDOM);

  return observer;
}
