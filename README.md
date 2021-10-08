# Repro steps

Just run `npx typestat --config typestat.json`. Only dependency for repro is typescript so I just checked it in here.

Notice that the number of `!`s in the middle `x` property grows infinitely. It seems that the isue is to do with the order of adding these `!` characters. If you remove `demo1.ts` from the project, you will note that the end result in `demo2.ts` will be `x.x!.x!()`, leaving the first `x` still nullable. Introducing a second similar issues (`demo2.ts`) seems to cause the tool to go into a loop of waves, as it (correctly) detects there is still an nullable property, but seems to not be able to access it.