const toggle = document.querySelector('.menu');
const nav = document.getElementById('navigation');
toggle.hidden = false;
const close = () => toggle.setAttribute('aria-expanded', 'false');
toggle.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') === 'false'));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    close();
    toggle.focus();
  }
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) close();
});

const service = document.getElementById('service');
if (service) {
  const slug = new URLSearchParams(location.search).get('service');
  if ([...service.options].some(option => option.value === slug)) service.value = slug;

  const update = () => {
    const name = service.value ? service.selectedOptions[0].textContent : '';
    const subject = name ? name + ' quote in Thunder Bay' : 'Cleaning quote in Thunder Bay';
    const body = 'Hi OCDbrothers,\n\nI’d like a cleaning quote.\n\nService: ' + (name || 'Not sure') + '\nArea or postal code: \nProperty type: \nCleaning priorities: \nPreferred timing: ';
    const message = name ? 'Hi OCDbrothers, I’d like a quote for ' + name + ' in Thunder Bay.' : 'Hi OCDbrothers, I’d like a cleaning quote in Thunder Bay.';
    document.getElementById('email-quote').href = 'mailto:ocdbrotherstbay@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    document.getElementById('whatsapp-quote').href = 'https://wa.me/18073583250?text=' + encodeURIComponent(message);
  };
  service.addEventListener('change', update);
  update();
}
