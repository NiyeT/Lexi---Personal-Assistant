import nltk

def get_tags(sentence):
    tokens=nltk.word_tokenize(sentence)
    pos_tags=nltk.pos_tag(tokens)
    nouns=[]
    for pos_tag in pos_tags:
        word=pos_tag[0]
        pos=pos_tag[1]
        if(pos.find("NN") is not -1):nouns.append(word)
    return nouns
