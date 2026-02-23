import { useState } from "react"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordian = ({ data }) => {
  const [isOpen, setIsOpen] = useState(null)

  const handleOnClick = (idx) => {
    setIsOpen(isOpen === idx ? null : idx)
  }

  return (
    <div style={{ minWidth: "66vw", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Accordion</h1>
      {data.map((d, idx) => (
        <div 
          key={idx} 
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "6px", 
            marginBottom: "10px", 
            overflow: "hidden",
            boxShadow: isOpen === idx ? "0 2px 8px rgba(0,0,0,0.15)" : "none"
          }}
        >
          <button 
            onClick={() => handleOnClick(idx)} 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              width: "100%", 
              padding: "12px 16px", 
              background:"#af1e1e", 
              border: "none", 
              cursor: "pointer", 
              fontSize: "16px", 
              fontWeight: "bold",
              textAlign: "left"
            }}
          >
            {d.title} 
            {isOpen === idx ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </button>
          {isOpen === idx && (
            <div 
              style={{ 
                padding: "12px 16px", 
                background: "#fafafa", 
                color: "black", 
                borderTop: "1px solid #ddd",
                transition: "all 0.3s ease"
              }}
            >
              {d.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordian
