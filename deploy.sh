if [ "$#" -ne 1 ]; then
    echo "Usage: bash deploy.sh <baseURL>. Ex: bash deploy.sh https://www.isid.ac.in/~testdeploy/"
    exit
fi
rm -rf .angular node_modules/.cache dist deploy
ng build --base-href "$1";
cp -r "dist/isid-epu/" ./deploy
cp deploy/index.html deploy/404.html
