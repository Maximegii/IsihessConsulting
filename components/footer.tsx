export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-[var(--color-text)]/70 border-t border-[var(--color-text)]/10 bg-[var(--color-bg-light)]">
      © {new Date().getFullYear()} Ultimate Melik — Tous droits réservés.
    </footer>
  );
}
