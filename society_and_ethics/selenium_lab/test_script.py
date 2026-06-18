import time
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from webdriver_manager.microsoft import EdgeChromiumDriverManager
from jira import JIRA

# =========================================================================
# 1. SETUP DETAILS (Make sure to verify your JIRA_SERVER URL name!)
# =========================================================================
JIRA_SERVER = "https://atlassian.net"  # Update with your workspace prefix
JIRA_EMAIL = "meronaamdavidho@gmail.com"
JIRA_API_TOKEN = "ATATT3xFfGF004S5Q2n_MJ-AOY84yO0I4I4gcna2SOKNMSYe939Kvl1vRcfVxCNHqsKNEhIcQha7SAwlw2fI_uyCgwzv8-wUvxmHno3NQ0KPx77TmrXtCDhdUAidSGN8x7NTiOny5MgZL-e1IS5iYshwweGioaozVRYkUvLPRgOE-IzPBBYvfcU=8F82BE7D"
JIRA_PROJECT_KEY = "PROJ"

def create_jira_bug(test_name, failure_reason):
    try:
        jira = JIRA(basic_auth=(JIRA_EMAIL, JIRA_API_TOKEN), options={'server': JIRA_SERVER})
        bug_issue = {
            'project': {'key': JIRA_PROJECT_KEY},
            'summary': f'Automated Test Failed: {test_name}',
            'description': f'Selenium automation test failed.\n\nReason:\n{failure_reason}',
            'issuetype': {'name': 'Bug'},
        }
        new_issue = jira.create_issue(fields=bug_issue)
        print(f"✅ Successfully logged Jira ticket: {new_issue.key}")
    except Exception as e:
        print(f"❌ Jira connection error: {e}")

# 2. RUN SELENIUM EDGE AUTOMATION TEST
print("Starting Microsoft Edge browser...")

# Configure Edge options to bypass SSL/TLS certificate warnings
options = webdriver.EdgeOptions()
options.add_argument('--allow-insecure-localhost')
options.add_argument('--ignore-certificate-errors')
options.set_capability("acceptInsecureCerts", True)

try:
    # Pass options configuration into the driver setup
    driver = webdriver.Edge(service=Service(EdgeChromiumDriverManager().install()), options=options)
    
    # Using Google which has a flawless SSL setup to avoid any network handshake issues
    driver.get("https://google.com")
    time.sleep(2)
    
    # We deliberately test a wrong title so it triggers your Jira bug logging functionality!
    expected_title = "Wrong Title For Testing"
    actual_title = driver.title
    
    assert expected_title == actual_title, f"Expected '{expected_title}' but got '{actual_title}'"
    print("Test passed successfully!")

except AssertionError as error:
    print("⚠️ Test Assertion Failed! Transferring bug log information to Jira...")
    create_jira_bug("Google Homepage Verification Test", str(error))
    
except Exception as e:
    print(f"❌ Automation runtime error: {e}")

finally:
    # Safely terminate the running driver instance
    if 'driver' in locals():
        driver.quit()
