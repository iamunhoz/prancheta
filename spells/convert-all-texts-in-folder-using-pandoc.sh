find . -iname '*.odt' -exec sh -c 'pandoc /bin/bash -o /bin/bash.md' {} \;
