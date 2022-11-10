import csv
data=[]
heading=[]

i=0
with open("lab_11_data.csv", 'r') as file:
  csvreader = csv.reader(file)
  for row in csvreader:
        if i == 0:
            heading.extend(row)
            i=1
            continue
        data.append(row)


# 1
for i in range(6):
    for row in data:
        row.pop()


# 2
filtered = list(filter(lambda row: float(row[6]) >= -3, data))

#3
file1 = open("avg_output.txt","w")

open_ = list(map(lambda row: float(row[1].replace(",", "")), filtered   ))
file1.write(str(sum(open_)/len(open_)) + "\n")


high = list(map(lambda row: float(row[2].replace(",", "")), filtered   ))
file1.write(str(sum(high)/len(high)) + "\n")


low = list(map(lambda row: float(row[3].replace(",", "")), filtered   ))
file1.write(str(sum(low)/len(low)) + "\n")

file1.close()
  

# 4
ch=input("Enter letter: ")
filtered2=list(filter(lambda row: row[0][0] == ch , filtered))




output_file = open("stock_output.txt", "w")

for row in filtered2:
    for ele in row:
        output_file.write(str(ele) +" ")
    output_file.write("\n")


output_file.close()
