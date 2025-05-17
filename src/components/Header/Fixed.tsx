
function Fixed() {
   
  return (
    <div className="w-[80px] h-[80px] fixed bottom-[50px] right-5 z-50 flex items-center justify-center max-sm:w-[70px] max-sm:h-[70px] max-sm:bottom-2">
      <a
        href="https://wa.me/+923409899794?text=Hello Momi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
      >
        <img
          src="whatsapp-logo.svg"
          alt="WhatsApp Icon"
          className="w-full h-full object-cover animate-bounce
"
        />
      </a>
    </div>
  );
}

export default Fixed;
