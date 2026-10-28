import { createContext, useContext, useState, useCallback } from "react";

const ContactModalContext = createContext({
  isOpen: false,
  selectedTier: "pro",
  openContactModal: (_tier) => {},
  closeContactModal: () => {},
});

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("pro");

  const openContactModal = useCallback((tier = "pro") => {
    // Normalize tier names
    let normalized = "pro";
    if (typeof tier === "string") {
      const lower = tier.toLowerCase();
      if (lower.includes("start") || lower.includes("essential")) {
        normalized = "starter";
      } else if (lower.includes("custom") || lower.includes("sign")) {
        normalized = "custom";
      } else {
        normalized = "pro";
      }
    }
    setSelectedTier(normalized);
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        selectedTier,
        setSelectedTier,
        openContactModal,
        closeContactModal,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => useContext(ContactModalContext);
