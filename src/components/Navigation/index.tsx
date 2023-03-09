import Link from "next/link";
import { GoPlus, GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navigation() {
  return (
    <>
      <nav className="w-full bg-[#032541] h-20">
        <div className="container mx-auto flex items-center h-full px-6 lg:px-0 justify-between">
          <div className="flex gap-4">
            <Link href="/" className="btn btn-ghost text-blue-500">
              TMDB
            </Link>
            <Link href="/movies" className="btn btn-ghost text-white">
              Movies
            </Link>
            <Link href="/tv-shows" className="btn btn-ghost text-white">
              tv shows
            </Link>
            <Link href="/people" className="btn btn-ghost text-white">
              people
            </Link>
            <Link href="/more" className="btn btn-ghost text-white">
              more
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="/add" className="btn btn-ghost text-white">
              <GoPlus className="text-xl " />
            </Link>

            <Link href="/language" className="btn btn-outline text-white">
              En
            </Link>

            <Link href="/notifications" className="btn btn-ghost text-white">
              <IoNotificationsOutline className="text-xl " />
            </Link>

            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>MX</span>
              </div>
            </div>

            <button className="btn btn-ghost text-blue-500">
              <GoSearch className="text-xl"/>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
