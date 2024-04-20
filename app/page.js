
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-gray-100">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">User Management System</h1>
        <p className="text-lg text-gray-700">Welcome to the User Management System. This website allows you to manage users efficiently. You can perform various operations such as creating, searching, updating, and deleting user information.</p>
      </header>
      
      <nav className="mt-8 bg-blue-400 p-4 rounded-lg border border-1">
        <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <li><a href="/create" className="text-white hover:text-gray-200">Create User</a></li>
          <li><a href="/search" className="text-white hover:text-gray-200">Search User</a></li>
          <li><a href="/update" className="text-white hover:text-gray-200">Update User</a></li>
          <li><a href="/delete" className="text-white hover:text-gray-200">Delete User</a></li>
          <li><a href="/display" className="text-white hover:text-gray-200">Display All Users</a></li>
        </ul>
      </nav>

      

      <footer className="mt-8 text-center py-4">
        <p className="text-gray-600">Developed by Yash Patel</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yashpatel2000" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/yashpatel2000/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">LinkedIn</a>
          <a href="https://twitter.com/yashpatel2000" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Twitter</a>
        </div>
      </footer>
    </main>
  );
}
