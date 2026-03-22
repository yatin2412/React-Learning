import React, { useState } from "react"

type Tab = {
  id: number
  label: string
  content: string
}

const tabs: Tab[] = [
  { id: 1, label: "Home", content: "Home Content" },
  { id: 2, label: "Profile", content: "Profile Content" },
  { id: 3, label: "Settings", content: "Settings Content" }
]

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <div>
      
      {/* Tab Headers */}
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px",
              background: activeTab === tab.id ? "black" : "lightgray",
              color: activeTab === tab.id ? "white" : "black"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "20px" }}>
        {tabs.map(tab =>
          activeTab === tab.id ? (
            <div key={tab.id}>{tab.content}</div>
          ) : null
        )}
      </div>

    </div>
  )
}

export default TabsComponent