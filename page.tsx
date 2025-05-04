import { AccountInfoForm } from "@/components/account-info-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00011c] to-[#090d27] text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Free Fire Account Information
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get detailed information about any Free Fire account using their UID. Check player stats, rank, level, and
            more in one place.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <AccountInfoForm />

          <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">What Information Can You Get?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Nickname
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Likes
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Level & Experience
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Honor Score
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  BR/CS Rank & Points
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Last Login Time
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Account Creation Date
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Bio Information
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Booyah Pass Level
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                  Guild Information
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">How It Works</h2>
            <p className="text-gray-300 mb-4">
              This tool connects to the Free Fire API to retrieve player information using the provided UID. It's a
              convenient way to check account details without having to navigate through multiple in-game menus or use
              third-party applications.
            </p>
            <p className="text-gray-300">
              Simply enter a valid Free Fire UID in the form above and click "Get Account Info" to see comprehensive
              details about that account.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
