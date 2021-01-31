const _defaultOptions = {
  root: null,
  rootMargins: "10px",
  threshold: 0.5
};

export default function(handler, optionArg, observingDOM) {
  let options = Object.assign({}, _defaultOptions, optionArg);
  const interSectionHandler = function(entries) {
    if (entries[0].isIntersecting) {
      handler();
    }
  };
  const observer = new IntersectionObserver(interSectionHandler, options);
  observer.observe(observingDOM);

  return observer;
}
