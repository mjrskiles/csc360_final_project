"""
A script to parse a CSV file of the cubs 2018 schedule into JSON objects

The JSON interface:
export interface GameInfo {
  date: string
  time: string
  description: string
  isHomeGame: boolean
}

The CSV columns:
START DATE,START TIME,START TIME ET,SUBJECT,LOCATION,DESCRIPTION,END DATE,END DATE ET,END TIME,END TIME ET,REMINDER OFF,REMINDER ON,REMINDER DATE,REMINDER TIME,REMINDER TIME ET,SHOWTIMEAS FREE,SHOWTIMEAS BUSY
"""

import sys
import fileinput
import json

def usage(script_name):
  print('Argument(s) specified incorrectly.')
  print('Usage: python3 ' + script_name + ' <filename>')

def parse_args():
  args = sys.argv
  argc = len(args)

  if argc != 2:
    usage(args[0])

  return args[1]

def parse_schedule(filename):
  f = open(filename)
  
  titleLine = f.readline()
  columns = titleLine.split(",")

  date_index = -1
  time_index = -1
  subject_index = -1
  location_index = -1
  for i in range(len(columns)):
    if columns[i] == 'START DATE':
      date_index = i
    if columns[i] == 'START TIME':
      time_index = i
    if columns[i] == 'SUBJECT':
      subject_index = i
    if columns[i] == 'LOCATION':
      location_index = i
  
  for val in [date_index, time_index, subject_index, location_index]:
    if val == -1:
      print("Didn't parse the column indexes properly.")
      sys.exit(1)
  
  line = f.readline()
  while line:
    values = line.split(",")
    location = values[location_index]

    isHomeGame = False
    if 'Wrigley' in location:
      isHomeGame = True

    gameDict = { 'date': values[date_index], 'time':values[time_index], 'description': values[subject_index], 'isHomeGame':isHomeGame}
    j = json.dumps(gameDict)
    print(j)
    # print(json.dumps(gameDict, sort_keys=False, indent=2))
    line = f.readline()

if __name__ == '__main__':
  filename = parse_args()
  parse_schedule(filename)
  
