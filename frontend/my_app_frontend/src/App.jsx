import { useState } from "react"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AuthProvider } from "./contexts/AuthContext"
import { Button } from "./components/ui/Button"
import { Input } from "./components/ui/Input"
import { Modal } from "./components/ui/Modal"
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/Card"
import { Section } from "./components/ui/Section"
import { useToggle } from "./hooks/useToggle"

function App() {
  const [isModalOpen, { toggle: toggleModal }] = useToggle()
  const [inputValue, setInputValue] = useState("")

  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Section padding="lg">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Component Demo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                />
                <Button onClick={toggleModal} className="w-full">
                  Open Modal
                </Button>
              </CardContent>
            </Card>
          </Section>

          <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
            title="Example Modal"
            size="md"
          >
            <p>This is a reusable modal component with responsive design and accessibility features.</p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" onClick={toggleModal}>
                Cancel
              </Button>
              <Button onClick={toggleModal}>
                Confirm
              </Button>
            </div>
          </Modal>
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
