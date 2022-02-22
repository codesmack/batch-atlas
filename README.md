# Part 1: (Node Installation)
1. Go to URL https://nodejs.org/en/download/
   Download and Install - LTS - Windows Installer (.msi) - x64
2. Once Installed, Open Command Propmpt and run cmd:
   node -version

   (Expected Output: v14.x.x  -- some version number)

# Part 2: (Angular CLI Installation)
1. Open Command Propmpt and run cmd:
   npm install -g @angular/cli

2. Once Installation is over, run cmd:
   ng version
   
  (Expected Output: Angular CLI: 13.x.xx  -- some version number) 

# Part 3: (Create an Angular App)
1. Open Folder Explorer, Create folder C:\<YourName>\Projects\Ng
2. Open Command Propmpt and run cmd:
   cd C:\<YourName>\Projects\Ng

3. run cmd:
   ng new MyFirstApp

   (Expected Output: First Angular app will get created)

4. run cmd:
   cd C:\<YourName>\Projects\Ng\MyFirstApp
   ng serve --open

   (Expected Output: First Angular app will get launched in browser at http://localhost:4200)
