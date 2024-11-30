# Program to send bulk messages through WhatsApp web from an excel sheet without saving contact numbers
# Author @inforkgodara

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from time import sleep
import pandas

import warnings
from urllib3.exceptions import NotOpenSSLWarning

from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options


warnings.filterwarnings("ignore", category=NotOpenSSLWarning)
excel_data = pandas.read_excel('Recipients data.xlsx', sheet_name='Recipients')

count = 0

# Specify the path to your local ChromeDriver
chrome_driver_path = './chromedriver'  # Update this path

# Set up Chrome options if needed
chrome_options = Options()
# You can add options here if necessary, e.g., headless mode
# chrome_options.add_argument("--headless")

# Create a Service object
service = Service(chrome_driver_path)
contentsText = """🙏 MULTI LINE CONTENT  🙏

HELLO & GOOD BYE
""".replace('\n', '%0A')  # Replace line breaks with URL encoding
# Initialize the WebDriver with the Service and options
driver = webdriver.Chrome(service=service, options=chrome_options)
driver.get('https://web.whatsapp.com')
input("Press ENTER after login into Whatsapp Web and your chats are visiable.")
for column in excel_data['Contact'].tolist():
    try:
        url = 'https://web.whatsapp.com/send?phone={}&text={}'.format(excel_data['Contact'][count], contentsText)
        sent = False
        # It tries 3 times to send a message in case if there any error occurred
        driver.get(url)
        try:
            click_btn = WebDriverWait(driver, 15).until(
                EC.element_to_be_clickable((By.CLASS_NAME, 'x1lfpgzf')))
        except Exception as e:
            print(str(excel_data['Contact'][count]))
        else:
            sleep(2)
            click_btn.click()
            sent = True
            sleep(4)
            # print('Message sent to: ' + str(excel_data['Contact'][count]))
        count = count + 1
    except Exception as e:
        print('Failed to send message to ' + str(excel_data['Contact'][count]) + str(e))
driver.quit()
print("The script executed successfully.")
