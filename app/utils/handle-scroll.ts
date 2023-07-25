export const handleScroll = (target: string) => {
  const element = document.querySelector(`#${target}`);
  element?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
};
