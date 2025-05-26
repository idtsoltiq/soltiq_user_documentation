# Getting started

> These steps assume **Python 3.8 or newer** is already installed.
> If multiple versions of Python are on your system, use `python3` (macOS/Linux) or `py` (Windows) instead of `python`.

### 1 — Create and activate a virtual environment

| Platform                 | Step 1. Create venv            | Step 2. Activate                      | Deactivate   |
| ------------------------ | ---------------------- | ----------------------------- | ------------ |
| **Windows (PowerShell)** | `python -m venv venv`  | `./venv/Scripts/Activate.ps1` | `deactivate` |
| **Windows (cmd.exe)**    | `python -m venv venv`  | `venv\Scripts\activate.bat`   | `deactivate` |
| **macOS / Linux**        | `python3 -m venv venv` | `source venv/bin/activate`    | `deactivate` |

### 2 — Install project dependencies

```shell
pip install -r requirements.txt
```

### 3 — Preview the site locally

```shell
mkdocs serve
```

Open **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)** in your browser to see live changes.

### 4 — Deploy to GitHub Pages

```shell
mkdocs gh-deploy --clean --force
```
