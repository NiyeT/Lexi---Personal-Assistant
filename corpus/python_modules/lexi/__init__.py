from os import path
import json
from sys import path as p
from os import environ, path, listdir, getcwd, mkdir
from shutil import move, rmtree
p.append('/guardin/corpus/python_modules/')
import file_manager
import language

file_descriptor_title="meta.json"

def create(args):
    description=input("Description: ")
    tags=input("tags: ")
    if(description):
        descriptor_tags=language.get_tags(description)
    else:
        descriptor_tags=tags
    meta={
        "description":description.lower(),
        "tags":descriptor_tags
    }
    corpus_path=environ['Lexi']
    dir_path=path.join(corpus_path,args['create'])
    meta_path=path.join(dir_path,'meta.json')
    mkdir(dir_path)
    file=open(meta_path,'w+')
    file.write(json.dumps(meta,indent=3))

def delete(args):
    # print('rm:',args['remove'])
    # print('environ:',environ['Lexi'])
    deletion_path=path.join(environ["Lexi"],args['delete'])
    rmtree(deletion_path)

def store(args):
    intended_path=args["store"]
    package_path=""
    if(intended_path[0] is not "/") :
        package_path=path.join(getcwd(),intended_path)
    else:
        package_path=intended_path
    file_descriptor_path=path.join(package_path,file_descriptor_title)
    description=input("Description: ")
    tags=input("tags: ")
    if(description):
        descriptor_tags=language.get_tags(description)
    else:
        descriptor_tags=tags
    meta={
        "description":description.lower(),
        "tags":descriptor_tags
    }
    file=file_manager.create_file(file_descriptor_path)
    file.write(json.dumps(meta,indent=3))
    move(package_path,environ['Lexi'])

def get(args):
    lexi=environ["Lexi"]
    folders=listdir(lexi)
    matches=[]
    for folder in folders:
        folder_path=path.join(lexi,folder)
        file_descriptor_path=path.join(folder_path,file_descriptor_title)
        if(not path.exists(file_descriptor_path)):continue
        file_info=json.loads(file_manager.get_file(file_descriptor_path))
        file_tags=file_info['tags']
        tag=args['get'].lower()
        if(tag.find(folder) is not -1):matches.append(folder_path)
        for file_tag in file_tags:
            # print('file_tag:',file_tag)
            file_tag=file_tag.lower()
            has_tag=file_tag.find(tag)
            if(has_tag is not -1):
                matches.append(folder_path)
                break
    for match in matches:
        print(match)
