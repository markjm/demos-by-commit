# Repro steps

I have included comments inline in `demo1.ts`. Just run `npx typestat --config typestat.json` to repro initial state.

I am unable to get a repro on my linux container running VSCode in browser, but repros consistantly on windows.

Guessing that the character position typescript provides ignores the BOM character, which messes up actually writing back to the file