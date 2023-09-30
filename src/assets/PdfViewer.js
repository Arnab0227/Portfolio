

export default function PdfViewer() {
    
    const pdfViewUrl = 'https://drive.google.com/file/d/1_odA4SIjppEogfCy1B0MSghk2kYjIFp2/view?usp=sharing'
    
    const openPdfInNewTab = () => {
        window.open(pdfViewUrl, '_blank');
    }
  
    return (
    <div>
        <button onClick={openPdfInNewTab} className="w-32 h-12 elevation-10 shadow-lg rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Resume</button>
      
    </div>
  )
}
