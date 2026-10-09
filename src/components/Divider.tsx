export default function Divider() {
  return (
    <div className="relative py-8 flex items-center justify-center max-w-4xl mx-auto px-6" aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8D3A3] to-transparent" />
      <span className="mx-4 text-[#B8893B] text-xs select-none">✦</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8D3A3] to-transparent" />
    </div>
  );
}
