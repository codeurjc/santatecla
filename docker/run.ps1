cd ../front

# Remove old generated resources
Remove-Item dist\front\* -Force -Recurse
Remove-Item ..\back\src\main\resources\static\* -Force -Recurse

# Build angular app
docker run --rm --name angular-cli -v ${PWD}:/angular -w /angular node /bin/bash -c "npm install; npm run ng build --prod --baseHref=http://localhost:8080/"

cd ../back

# Copy new generated resources on back static
xcopy /Y ..\front\dist\front\* src\main\resources\static\

# Create jar
docker run -it --rm -v "%cd%":/usr/src/project -w /usr/src/project maven:alpine mvn -Dmaven.test.skip=true package
xcopy /Y target\back-0.0.1-SNAPSHOT.jar ..\docker\build\

cd ../docker

# Build new back image
docker build -t sigma98/back .

docker-compose up