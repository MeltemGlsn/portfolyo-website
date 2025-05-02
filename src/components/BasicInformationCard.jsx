function BasicInformationCard() {
    return (
      <div className="bg-pink-50 border border-pink-300 p-4 rounded-lg shadow-sm text-sm w-full md:w-1/2">
        <h3 className="text-pink-600 font-semibold mb-2">Basic Information</h3>
        <p><strong>Doğum tarihi:</strong> 24.03.1996</p>
        <p><strong>İkamet Şehri:</strong> Ankara</p>
        <p><strong>Eğitim Durumu:</strong> Hacettepe Ünv. Biyoloji<br />Lisans, 2016</p>
        <p><strong>Tercih Ettiği Rol:</strong> Frontend, UI</p>
      </div>
    );
  }
  
  export default BasicInformationCard;
  