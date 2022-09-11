
import os
import fitz  # pip install --upgrade pip; pip install --upgrade pymupdf
from tqdm import tqdm # pip install tqdm
import PyPDF2



'''
pdfToCsv : extract words and images in .pdf and additionally create a nameList of images.  
'''

class PdfToCsv(object):
    """
    folderPath : the folder path where the .csv will be stored.
    pdfPath    : the file path where .pdf source is, the file name need to be included.
    csvName    : the csv name, user don't need to add .csv at the end.
    """
    def __init__(self, folderPath, pdfPath, csvName) -> None:
        self.csvpath = f'{folderPath}{csvName}'
        self.folderPath = folderPath 
        self.pdfPath = pdfPath
    
    
    #each page in output csv file, will be seperated by '#####'
    def main(self):
        workdir = self.pdfPath
        if ".pdf" in workdir:
            doc = fitz.Document(workdir)

        for i in tqdm(range(len(doc)), desc="pages"):
            for img in tqdm(doc.get_page_images(i), desc="page_images"):
                xref = img[0]
                image = doc.extract_image(xref)
                pix = fitz.Pixmap(doc, xref)
                pix.save(os.path.join(workdir, "%s_p%s-%s.png" % (self.folderPath[:-4], i, xref)))
                
        print("Done!")



        f = open(f'{self.csvpath}.csv', 'w')
        writer = csv.writer(f)
        with open(self.pdfPath, "rb") as pdf_file:
            read_pdf = PyPDF2.PdfFileReader(pdf_file)
            count = '#####'
            for page in read_pdf.pages:
                writer.writerow([count])
                page_content = page.extractText()
                writer.writerow([page_content])
        
        f.close()

        
if __name__ == '__main__':
    PdfToCsv = PdfToCsv("/Users/adamliu/python/WIT hackthon 2022/UniMemoi/backend/","/Users/adamliu/Desktop/semester1/database/INFO90002_Week9-2_DBA.pdf", "test")
    PdfToCsv.main()