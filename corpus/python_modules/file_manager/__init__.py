def get_file(fn):
    file=open(fn,'r')
    contents=file.read()
    file.close()
    return contents

def create_file(fn):
    file=open(fn,'w')
    return file
