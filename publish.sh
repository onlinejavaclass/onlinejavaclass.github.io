echo "insert the commit msg:"
read $1
gulp
git add . && git commit -m $1
git push dev
git push origin master

