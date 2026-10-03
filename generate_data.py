import os
import glob

# Get all Roblox screenshots
roblox_screenshots = sorted(glob.glob("C:/Users/emran/OneDrive/Desktop/RobloxContent/Screenshot*.png"))
roblox_items = []
for i, screenshot in enumerate(roblox_screenshots, 1):
    filename = os.path.basename(screenshot)
    roblox_items.append(f"{{ title: 'Roblox Game Scene {i}', tags: 'Game Development', file: 'assets/RobloxContent/{filename}' }}")

# Get all ROBLOX Models
roblox_models = sorted(glob.glob("C:/Users/emran/OneDrive/Desktop/RobloxContent/ROBLOX MODELS/*.glb"))
model_items = []
for model in roblox_models[:50]:  # First 50 models
    filename = os.path.basename(model)
    name = filename.replace('.glb', '').replace('_', ' ').title()
    model_items.append(f"{{ title: '{name}', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/{filename}' }}")

# Get all n8n files
n8n_files = sorted(glob.glob("C:/Users/emran/OneDrive/Desktop/portofolio/n8n/*"))
n8n_items = []
for n8n_file in n8n_files:
    filename = os.path.basename(n8n_file)
    if filename.endswith('.png'):
        title = filename.replace('Screenshot ', '').replace('.png', '')
        n8n_items.append(f"{{ title: 'n8n Workflow {title}', tags: 'Automation', file: 'assets/n8n/{filename}' }}")
    elif filename.endswith('.json'):
        title = filename.replace('.json', '').replace('-', ' ').title()
        n8n_items.append(f"{{ title: '{title}', tags: 'Workflow Config', file: 'assets/n8n/{filename}' }}")

print("=== ROBLOX SCREENSHOTS ===")
print(",\n                    ".join(roblox_items))
print("\n\n=== ROBLOX MODELS (First 50) ===")
print(",\n                    ".join(model_items))
print("\n\n=== N8N FILES ===")
print(",\n                    ".join(n8n_items))
print(f"\n\nTotal Roblox Screenshots: {len(roblox_screenshots)}")
print(f"Total Roblox Models: {len(roblox_models)}")
print(f"Total n8n Files: {len(n8n_files)}")
