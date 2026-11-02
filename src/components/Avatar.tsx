export default function Avatar() {
  return (
    <div className="relative flex">
      <div className="glowing-effect relative flex size-28 shrink-0 items-center">
        <img src="/avatar.jpg" alt="" className="rounded-full opacity-80" />
      </div>
    </div>
  );
}
