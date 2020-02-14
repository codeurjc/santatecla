cd ../front

:: Copy generated resources on static
del /Q ..\back\src\main\resources\static\*
copy /Y dist\front\* ..\back\src\main\resources\static

cd ../back

:: Create jar
docker run -it --rm -v "%cd%":/usr/src/project -w /usr/src/project maven:alpine mvn -Dmaven.test.skip=true package

:: Copy jar
copy target\back-0.0.1-SNAPSHOT.jar ..\docker\build\
cd ../docker

:: Delete previous back image
docker rmi -f sigma98/back

:: Build back image
docker build -t sigma98/back .
