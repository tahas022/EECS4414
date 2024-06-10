#importing libraries
import tarfile

# Define the path to the tar.gz file
tar_path = 'facebook.tar.gz'

# This function is used to extract each of the 'featnames' files specifically from 
# the tar file
def extract_file_content(tar, file_name):
    member = tar.getmember(file_name)
    extracted_file = tar.extractfile(member)
    if extracted_file is not None:
        return extracted_file.read().decode('utf-8')
    return ""

# This function opens all the tar files
with tarfile.open(tar_path, 'r:gz') as tar:
    content_1 = extract_file_content(tar, 'facebook/3980.featnames')
    content_2 = extract_file_content(tar, 'facebook/1684.featnames')
    content_3 = extract_file_content(tar, 'facebook/698.featnames')
    content_4 = extract_file_content(tar, 'facebook/1912.featnames')
    content_5 = extract_file_content(tar, 'facebook/414.featnames')
    content_6 = extract_file_content(tar, 'facebook/3437.featnames')
    content_7 = extract_file_content(tar, 'facebook/348.featnames')
    content_8 = extract_file_content(tar, 'facebook/686.featnames')
    content_9 = extract_file_content(tar, 'facebook/107.featnames')

# We then combine all files to be used together
combined_content = content_1 + "\n" + content_2 + "\n" + content_3 + "\n" + content_4 + "\n" + content_5 + "\n" + content_6 + "\n" + content_7 + "\n" + content_8 + "\n" + content_9

# Print the combined content
print(combined_content)