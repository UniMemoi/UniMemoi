import collections 
import collections.abc
from pptx import Presentation
import csv
from csv import reader

'''

'''
class pptToCsv(object):
    def __init__(self, filePath, csvFileName) -> None:
        self.csvFileName = csvFileName
        self.filePath =  filePath
        self.pptx = Presentation(self.filePath)

    def main(self):
        f = open("/Users/adamliu/python/WIT hackthon 2022/UniMemoi/backend/{}.csv".format(self.csvFileName), 'w')
        writer = csv.writer(f)
        count = 1
        for slide in self.pptx.slides:
            writer.writerow([count])
            count += 1
            for shape in slide.shapes:
                if shape.has_text_frame :
                    textFrame = shape.text_frame
                    for paragraph in textFrame.paragraphs:
                        str = paragraph.text
                        writer.writerow([str])

# Import the required Module
import pandas as pd
import PyPDF2
from pathlib import Path 

# Read a PDF File
class pdfToCsv(object):
    def __init__(self, folderPath, pdfPath, csvName) -> None:
        self.csvpath = f'{folderPath}{csvName}' 
        self.pdfPath = pdfPath
    def main(self):
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

        # print(page_content)
        #    convert PDF into CSV
        
        

if __name__ == '__main__':
    # pptToCsv = pptToCsv('/Users/adamliu/Desktop/semester1/internet technilogy/Week2-Lecture3.pptx',"test")
    # pptToCsv.main()
    pdfToCsv = pdfToCsv("/Users/adamliu/python/WIT hackthon 2022/UniMemoi/backend/","/Users/adamliu/Desktop/semester1/algorithm and Complexity/01.pdf", "test")
    pdfToCsv.main()