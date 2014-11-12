import os
import subprocess
import sys

import subprocess

process = subprocess.Popen(
    ["drmemory",  "--help"], stdout=subprocess.PIPE, stderr=subprocess.PIPE
)

out, err = process.communicate()

print err,
print "done"

