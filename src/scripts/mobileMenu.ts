export function initMenu(): void {
	const btn = document.getElementById('menu-toggle') as HTMLButtonElement | null;
	const menu = document.getElementById('mobile-menu') as HTMLDivElement | null;
	const ham = document.getElementById('hamburger-icon') as SVGElement | null;
	const cross = document.getElementById('close-icon') as SVGElement | null;

	if (!btn || !menu) return;

	const toggleMenu = (): void => {
		const isHidden = menu.classList.toggle('hidden');

		ham?.classList.toggle('hidden', !isHidden);
		cross?.classList.toggle('hidden', isHidden);

		if (!isHidden) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	};

	btn.addEventListener('click', toggleMenu);

	menu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			menu.classList.add('hidden');
			ham?.classList.remove('hidden');
			cross?.classList.add('hidden');
			document.body.classList.remove('overflow-hidden');
		});
	});
}