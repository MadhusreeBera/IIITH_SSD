from tabulate import tabulate
from datetime import datetime

def print_m(data):
    # i=0
    # for l in data:
    #     # print(i, end='')
    #     for ele in l:
    #         print(ele, '\t\t\t', end='' )
    #     print()
    #     i+=1
    # print()
    print(tabulate(data, showindex="always"))
    print()





file1 = open('Readings for 42x25 mat.txt', 'r')
Lines = file1.readlines()

dict={}

k=0
while k<len(Lines):
    matrix=[]
    time=''
    for i in range(42):
        # print(k)
        temp=Lines[k].split('\t')
        pressures=[]
        if i== 20:
            # print(k, temp[0])
            time=temp[0]
        for j in range(1, len(temp)-1):
            pressures.append(int(temp[j])) #stored a line
        matrix.append(pressures)
        if i == 41:
            k+=4
            # print("inserting",time)
            # print(matrix)
            dict[time] = matrix
            break
        k+=1
        if k >= len(Lines):
            break



dict1=[]
for key,value in dict.items():
    # print(key)
    # print_m(value)
    coords=set()
    for i in range(len(value)):
        for j in range(len(value[i])):
            if value[i][j] != 0: #non-zero current
                coords.add(i)
    # print(coords)
    dict1.append ((key,list(coords)))
    # print()


# print(dict1)
# for ele in dict1:
#     print(ele)

i=0
timeList=[]
tempList=[]
while i<len(dict1):
    if dict1[i][1] == []:
        # print("GOT NULL")
        i+=1
        continue
    for j in range(i+1,len(dict1)):
        if dict1[i][1] == dict1[j][1]:
            # print("found leg")
            if(i+1==j):
                # print(dict1[i][0], end="\t")
                tempList.append(dict1[i][1])
                tempList.append(dict1[i][0])

            # print(dict1[j][0], end="\t")
            tempList.append(dict1[j][0])

        else:
            # print()
            # print(tempList)
            if len(tempList) > 0:
                timeList.append(tempList)
            tempList=[]
            i=j-1
            # print(j)
            break
    i+=1


# for leg in timeList:
#     print(leg)

#stride length

#rows
# 0 to 42
# 43 to 83
# 84 to 125
leg1 = timeList[0][0]
leg1_c = leg1[len(leg1)//2] + 84 #assuming to be at bottom

leg2 = timeList[2][0]
leg2_c = leg2[len(leg2)//2] #top matrix

stride_len = abs(leg1_c-leg2_c)
print("Stride Length: ",stride_len)

leg1_time = timeList[0][1]
leg2_time = timeList[2][1]

time1 = datetime.strptime(leg1_time, '%H:%M:%S.%f')
time2 = datetime.strptime(leg2_time, '%H:%M:%S.%f')
time_diff=(time2-time1).total_seconds()

print("Stride Velocity: ", stride_len/time_diff)

print("Cadence: ", 180/time_diff)






# list1=[]
# tempList=[]
# for key in dict1:
#     print(key)
#     for key1 in dict1:
#         if dict1[key] == dict1[key1]:
#             tempList.append(key1)
#     print(tempList)
#     list1.append(tempList)
