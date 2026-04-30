import React, { useState } from 'react';

const TalkHub = () => {
  // Mesajları tutacağımız yer
  const [messages, setMessages] = useState([
    { id: 1, user: "YazılımcıKanka", text: "TalkHub'ın ilk mesajı! Selamlar millet. 🚀", time: "16:20" }
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        user: "Sen", // Şimdilik böyle kalsın
        text: inputText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputText(""); // Kutuyu temizle
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#36393f] text-gray-100 overflow-hidden font-sans">
      
      {/* 1. SÜTUN: SUNUCU LİSTESİ */}
      <div className="w-20 bg-[#202225] flex flex-col items-center py-3 space-y-2">
        <div className="w-12 h-12 bg-[#5865f2] rounded-2xl flex items-center justify-center cursor-pointer hover:rounded-xl transition-all duration-200">
          <span className="font-bold">TH</span>
        </div>
        <div className="w-8 h-0.5 bg-[#36393f] rounded-full"></div>
        {[1, 2].map(i => (
          <div key={i} className="w-12 h-12 bg-[#36393f] rounded-3xl flex items-center justify-center cursor-pointer hover:bg-[#5865f2] hover:rounded-xl transition-all duration-200">
            S{i}
          </div>
        ))}
      </div>

      {/* 2. SÜTUN: KANAL LİSTESİ */}
      <div className="w-60 bg-[#2f3136] flex flex-col">
        <div className="h-12 shadow-md flex items-center px-4 font-bold border-b border-[#26272b]">
          TalkHub Sunucusu
        </div>
        <div className="flex-1 p-3 space-y-1">
          <div className="text-gray-400 text-xs font-semibold px-2 uppercase mb-1">Metin Kanalları</div>
          <div className="bg-[#393c43] px-2 py-1 rounded text-white cursor-pointer"># genel</div>
          <div className="hover:bg-[#393c43] px-2 py-1 rounded text-gray-400 cursor-pointer"># yazılım</div>
        </div>
      </div>

      {/* 3. SÜTUN: CHAT ALANI */}
      <div className="flex-1 flex flex-col">
        <div className="h-12 shadow-md flex items-center px-4 border-b border-[#26272b] font-semibold">
          <span className="text-gray-400 mr-2">#</span> genel
        </div>

        {/* Mesaj Listesi */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-[#5865f2] rounded-full flex-shrink-0"></div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-white hover:underline cursor-pointer">{msg.user}</span>
                  <span className="text-[10px] text-gray-400">{msg.time}</span>
                </div>
                <p className="text-gray-300 leading-snug">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mesaj Giriş Kutusu */}
        <div className="p-4">
          <div className="bg-[#40444b] rounded-lg px-4 py-3">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleSendMessage}
              placeholder="#genel kanalına mesaj gönder" 
              className="bg-transparent w-full focus:outline-none text-gray-200 placeholder-[#72767d]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkHub;
