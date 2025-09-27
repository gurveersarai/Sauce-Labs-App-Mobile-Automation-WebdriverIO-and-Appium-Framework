# Sauce Labs App Mobile Automation Framework 
**Using WebdriverIO, Appium, Mocha and Chai. Test results are displayed in a simple mochawesome report.**


## Prerequisites

- Node.js (>= 14.x recommended)  
- npm (or yarn)  
- Mobile app build (APK / IPA) uploaded or accessible

## Installation

Clone the repository:

```bash
git clone https://github.com/gurveersarai/Sauce-Labs-App-Mobile-Automation-WebdriverIO-and-Appium-Framework.git
cd Sauce-Labs-App-Mobile-Automation-WebdriverIO-and-Appium-Framework
```

Install dependencies:
```
npm install
```

## Directory Structure
```
├── mochawesome-reports/         # mochawesome reports are held here 
├── app/                         # Sample / placeholder for app binaries
├── test/                        # Test files
│   └── helpers/                 # Helper files to avoid code duplication
    └── pageobjects/             # Locators for pages such as checkout page or for common elements
    └── specs/                   # Individual test spec files 
    └── testData/                # Test data such as card details and shipping address
├── wdio.conf.js                 # WebdriverIO configuration  
├── package.json  
├── package-lock.json  
└── .gitignore  
```

## Running Tests
```
npx wdio run wdio.conf.js
```

## Best Practices

- Parameterize device/platform settings
- Avoid hardcoding credentials—use environment variables
- Use hooks (before, after, etc.) for setup/teardown
- Capture screenshots on failures
- Keep tests atomic and independent
- Use page object model or abstraction for maintainability
  

