import csv

class textToCsv(object):
    def __init__(self, filePath, csvFileName) -> None:
        self.csvFileName = csvFileName 
        self.filePath = filePath
        self.inputFile = open(self.filePath)

    def main(self):
        f = open("./{}.csv".format(self.csvFileName), 'w')
        writer = csv.writer(f, dialect='unix')
        inputList = []
        for line in self.inputFile: # skip first number
            print(line.strip('\n'))
            break
        count = 1
        writer.writerow(["front", "back"])
        for line in self.inputFile:
            marker = count % 3
            if marker == 0:
                print(line.strip('\n'))
            elif marker == 1:
                str = line.strip('\n')
                inputList.append(str)
            elif marker == 2:
                str = line.strip('\n')
                inputList.append(str)
                writer.writerow(inputList)
                inputList = []
            count += 1
        f.close()

if __name__ == '__main__':
    textToCsv = textToCsv("./test.csv", "outtest")
    textToCsv.main()
