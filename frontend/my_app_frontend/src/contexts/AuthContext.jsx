import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("authToken")
        if (token) {
          // Simulate API call to verify token
          setTimeout(() => {
            setUser({ id: 1, name: "User", email: "user@example.com" })
            setLoading(false)
          }, 1000)
        } else {
          setLoading(false)
        }
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API login
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser = { id: 1, name: "User", email }
      const mockToken = "mock-jwt-token"
      
      localStorage.setItem("authToken", mockToken)
      setUser(mockUser)
      setLoading(false)
      
      return { success: true }
    } catch (err) {
      setError(err.message)
      setLoading(false)
      return { success: false, error: err.message }
    }
  }

  const logout = () => {
    localStorage.removeItem("authToken")
    setUser(null)
    setError(null)
  }

  const register = async (name, email, password) => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API registration
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser = { id: 1, name, email }
      const mockToken = "mock-jwt-token"
      
      localStorage.setItem("authToken", mockToken)
      setUser(mockUser)
      setLoading(false)
      
      return { success: true }
    } catch (err) {
      setError(err.message)
      setLoading(false)
      return { success: false, error: err.message }
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
      loading,
      error,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
