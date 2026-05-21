export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto w-11/12 max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-xl font-semibold">Sun Flex Solar Galaxy</div>
          <div className="mt-2 text-white/60 text-sm">
            Powering Tomorrow Beyond The Grid.
          </div>
        </div>
        <div className="text-white/60 text-sm">
          © {new Date().getFullYear()} Sun Flex Solar Galaxy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

