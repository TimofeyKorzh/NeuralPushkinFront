import os
import time

timestamp = os.stat("tt.txt").st_mtime
while True:
    time.sleep(1)
    if timestamp != os.stat("tt.txt").st_mtime:
        timestamp = os.stat("tt.txt").st_mtime
        print("пидор")
        time.sleep(1)