## Prerequisite

1. Install [uv](https://github.com/astral-sh/uv/releases/latest) (Recommended, Optional)

## Prepare

1. Clone this project

```
git clone -b backend --single-branch https://github.com/nguyenduchoaang/codeheroes-education.git backend
```

2. Open folder and create virtual environment

```
uv venv
```

3. Activate the virtual environment

```
# On macOS and Linux.
source .venv/bin/activate

# On Windows.
.\.venv\Scripts\activate.ps1
```

4. Install a package into the virtual environment

```
uv pip install -r requirements.txt
```

5. Create MySQL schema name `codeheroes`

6. Ignore tracking .env file

```
git update-index --skip-worktree .env
```

7. Set environment variable in .env file

8. Run `models.py`

```
python -m src.models
```

## Run

```
python -m src
```
