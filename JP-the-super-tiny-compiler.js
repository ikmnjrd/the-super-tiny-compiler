'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 本日、私たちはコンパイラを書いていこうと思う. しかしこれは広く使われているコンパイラにはならない...
 * というのも、これはすっっっごく小さなコンパイラだからだ。 このコンパイラは実際のところ、
 * 全てのコメントを除けば、このコンパイラのコードは200行以下になる。
 *
 * We're going to compile some lisp-like function calls into some C-like
 * function calls.
 *
 * 簡単な例を提示するので、あなたはLispやCに詳しい必要はない。
 *
 * `add`関数と`subtract`関数は以下のように書く。
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 簡単だよね?
 *
 * なら話は簡単で、まさにこれがコンパイルするつもりのものです.
 * これはLISPやC言語の完璧な構文ではないが、多くのモダンなコンパイラの主要部分を説明するのに
 * 十分な構文となっていることでしょう。
 */

/**
 * ほとんどのコンパイラは3つの主要な段階(stage)を踏みます: パース, 変換, コード生成
 *
 * 1. 「パース」は生のコードを、より抽象表現に変えることです。
 *
 * 2. 「変換」は、抽象表現を受け取り、コンパイラの望む形に加工します。
 *
 * 3. 「コード生成」は、変換されたコードを受け取り新しいコードを生成します。
 *
 */

/**
 * パースについて
 * -------
 *
 * 構文解析は通常、「字句解析」と「構文解析」の2つのフェーズに分けられます。
 *
 * 1. 「字句解析」 は生のコードを受けとり、トークナイザー（もしくはレキサー）と呼ぼれるものによって
 *    トークンと呼ばれる単位に分割されます。
 *
 *    トークンとは構文の中で独立して存在できるオブジェクトのことで、非常に小さな配列を形作ります。
 *    トークンは数値、ラベル、句読点、演算子など、何でも含みます。
 *
 * 2. 「構文解析」、トークンを取り出し、構文の各部分と相互の関係を記述した表現に再フォーマットします.
 * 　　これは、中間表現、または抽象構文木(AST)と言われています。
 *
 *    抽象構文木（AST）はコードを表現するために、扱いやすく、多くの情報を伝達する形として
 *    深くネストされたオブジェクトとなっています。
 *
 * 例えば次の構文は、
 *
 *   (add 2 (subtract 4 2))
 *
 * トークンとしては次のように見えるはずです:
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * そして抽象構文木 (AST) ではこのように見えるはずです。:
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 変換
 * --------------
 *
 * コンパイラが実行する次の手順は、変換です。
 * 再び前段からASTを取り出し、それに変更を加えます。
 * 同じ言語でASTを操作することもできるし、まったく新しい言語に翻訳することもできます。
 *
 * どのようにASTを変形させるか見てみましょう。
 *
 * あなたはASTの要素の中に非常に似ている要素が1つあることに気づいたかもしれません。
 * これらのオブジェクトには、typeプロパティがあります。
 * これらはそれぞれ、ASTノードと呼ばれています。
 * これらのノードには、ツリーの孤立した1つの部分を記述するプロパティが定義されています。
 *
 * "NumberLiteral"を持つノードでは、
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * "CallExpression"を持つノードでは、
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * ASTを変換する際には、プロパティの追加・削除・置換によってノードを操作することができ、
 * 新しいノードを追加したり、ノードを削除したり、既存のASTをそのままにして、
 * それを基に全く新しいASTを作成することができる。
 *
 * 私たちは今回、新しい言語をターゲットにしているので、
 * その言語に特化した全く新しいASTを作成することに重点を置いています。
 *
 * 走査（traversal）
 * ---------
 *
 * 全ノードを把握するために、 私たちはノード間を走査しなければいけない。
 * 走査処理は、各ノードを深さ優先で探っていく。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * そのため、上記のASTでは以下のように動きます:
 *
 *   1. Program - ASTの最上段からスタートします。
 *   2. CallExpression (add) - Programのbodyの最初の要素へ移動します。
 *   3. NumberLiteral (2) - CallExpressionのparamsの最初の要素に移動します。
 *   4. CallExpression (subtract) - CallExpressionのparamsの2番目の要素に移動します。
 *   5. NumberLiteral (4) - CallExpressionのparamsの最初の要素に移動します。
 *   6. NumberLiteral (2) - CallExpressionのparamsの2番目の要素に移動します。
 *
 * If we were manipulating this AST directly, instead of creating a separate AST,
 * もし、このASTを直接操作するのであれば、別のASTを作るのではなく、
 * ここに様々な抽象化を導入することになるだろう。
 * しかし、私たちがやろうとしていることは、ツリーの各ノードを訪れるだけで十分です。
 *
 * "訪れる"という単語を使った理由は、オブジェクト構造の中の要素をどのように
 * 操作するかにパターンがあるからです。
 *
 * ビジター(Visitors)
 * --------
 *
 * ここでの基本的な考え方は、異なるノードタイプを受け入れるメソッドを
 * 持つ「ビジター」オブジェクトを作成することです。
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 私たちはASTを走査するとき、 一致する型のノードに"入る"時、このビジターメソッドを呼ぶことになる。
 *
 * これを便利にするために、ノードと親ノードへの参照も渡すことにする。
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * しかし、 "出口"で呼ばれる可能性が存在しています。
 * 想像してください。前回からの私たちの木構造は次のようになっています。:
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 下へ走査していくと、行き止まりの枝に着き当たります。
 * 各枝の走査が終わった時に木から出ることになります。
 * 木を下へ降りていくことは入ることになり、上に戻ることは出ることに相当します。
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * この動きをサポートするために、ビジターの最終形態は次のようになります:
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * コード生成
 * ---------------
 *
 * コンパイラの最終段階はコード生成です。
 * コンパイラは、変換と重複することをすることもありますが、
 * ほとんどの場合、コード生成は、私たちのASTを受け取り、
 * コードを文字列化して戻すことを意味するだけです。
 *
 * コード生成器によっては、それぞれ異なる方法で動作します。
 * あるコンパイラでは以前のトークンを再利用し、別のコンパイラはノードを線形に表示できるように
 * コードの表現を作成しますが、私の知る限り、ほとんどは先ほど作成したASTを使用します。
 *
 * コード生成器はASTの異なるノードタイプを効率的にすべてプリントする方法を知っており、
 * すべてが1つの長いコード文字列にプリントされるまで、ネストしたノードをプリントするために
 * 自身を再帰的に呼び出します。
 */

/**
 * これでコンパイラを分解してのパーツ説明は終わりです！
 *
 * しかし、すべてのコンパイラーがここで説明したとおりの姿をしているとは言い切れません。
 * コンパイラは様々な用途に使われますし、私が説明した以上の手順が必要かもしれません。
 *
 * しかし、これでほとんどのコンパイラがどのようなものであるか、
 * 全般的なハイレベルの考えを持つことができたはずです。
 *
 * さて、ここまで説明したところで、皆さんは自分でコンパイラを書けるようになりましたね？
 *
 * というのは冗談で、そのために私はここにいるのです :P
 *
 * それでは初めて行きましょう...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * まず、構文解析の最初の段階である字句解析から始めましょう。
 *
 * 私たちはまず、コードの文字列をトークンの配列に分解していきます。
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// まず、コードの入力文字列を受け取って、次の2つに分けていきます。
function tokenizer(input) {

  // コード内のカーソルのような役目を担う`current`変数
  let current = 0;

  // そしてトークンをpushしていくための配列`tokens`
  let tokens = [];

  // まず、`while`ループを作成し、`current`を設定することから始めます。
  // `current`変数はコードの内部で必要なだけインクリメントして使います。
  //
  // これは、トークンの長さが任意であるため、
  // 1つのループ内で `current` を何度もインクリメントしたいからです。
  while (current < input.length) {

    // そして、`input` に `current`の文字を格納することにします。
    let char = input[current];

    // まず最初に確認したいのは、開括弧の有無です。
    // これは後で `CallExpression` で使うことになりますが、今は文字に集中していきます。
    //
    // 開括弧があるかどうかを確認します。:
    if (char === '(') {

      // もしそうなら、 `paren` 型の新しいトークンをプッシュし、その値を開き括弧に設定します。
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // `current`をインクリメントします。
      current++;

      // そして`continue`で次のループを実行します。
      continue;
    }

    // 次に閉括弧がないかチェックします。 前回と全く同じことです。
    // つまり閉じ括弧をチェックし、新しいトークンを追加し、
    // `current` をインクリメントし、 `continue` します。
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 続けて、今度は空白をチェックします。これは興味深いことに、
    // 空白は文字を区切るために存在しますが、
    // 実はトークンとして保存するのには重要ではありません。
    // 後で捨てればいいだけだからです。
    //
    // そこで、ここでは存在するかどうかをテストし、存在する場合はそのまま `continue` を実行します。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 次のトークンの種類は、数字です。これは今までと違って、
    // 数字は任意の数の文字であり、一連の文字全体を1つのトークンとして捕らえたいからです.
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        Only two separate tokens
    //
    // そこで、数列の最初の数字に遭遇したときからシーケンスをスタートさせます。
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // `value`を文字としてpushします。
      let value = '';

      // 数字でない文字に遭遇するまで、シーケンスの各文字をループして、
      // 数字である各文字を `value` にpushし、続くだけ `current` をインクリメントさせます。
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // その後、`number`トークンを`tokens`配列にpushします.
      tokens.push({ type: 'number', value });

      // まだ続きます。
      continue;
    }

    // また、この言語では文字列もサポートしており、
    // 二重引用符（"）で囲まれたテキストを使用することができます。
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // まずは二重引用符の開始箇所を確認することから始めます:
    if (char === '"') {
      // 文字列トークンを構築するために `value` 変数を保持します。
      let value = '';

      // トークンの冒頭の二重引用符は省略します。
      char = input[++current];

      // そしてもう一つの二重引用符に到達するまで繰り返し処理します。
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // 閉じる側の二重引用符もスキップします.
      char = input[++current];

      // `string`トークンを`tokens`配列にpushします.
      tokens.push({ type: 'string', value });

      continue;
    }

    // 最後のタイプのトークンは `name` トークンになります。
    // これは数字の代わりにアルファベットを並べたもので、
    // lispの構文でいうところの関数の名前にあたります。
    //
    //   (add 2 4)
    //    ^^^
    //    Name token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // ここでもまた、すべての文字をループさせて、値にプッシュしていくだけです。
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // そして、その値を `name` 型のトークンとしてプッシュし、続行します。
      tokens.push({ type: 'name', value });

      continue;
    }

    // 最後に、もしこれまでで文字がマッチしなかった場合は、エラーを投げて完全に終了します。
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // そして `tokenizer` の最後には、単純にトークンの配列を返します。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * パーサーでは、トークンの配列を受け取り、ASTに変換します.
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// では、トークンの配列を受け取る `parser` 関数を定義します。
function parser(tokens) {

  // ここでもカーソルとして使用する `current` 変数を保持しています。
  let current = 0;

  // しかし今回は、`while`ループの代わりに再帰を使うことにします。そこで、`walk`関数を定義します.
  function walk() {

    // walk 関数の内部では、まず `current` トークンを取得することから始めます。
    let token = tokens[current];

    // トークンの種類ごとに別のコードパスに分割して、まずは `number` トークンから始めましょう。
    //
    // `number`のトークンがあるかどうかをテストします。
    if (token.type === 'number') {

      // もしそれを持っていたら, `current`をインクリメントします.
      current++;

      // そして、`NumberLiteral`という新しいASTノードを返し、その値をトークンの値に設定します。
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 文字列の場合は、数値と同じように `StringLiteral` ノードを作成します。
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 次に、CallExpressionsを探します。まずは開括弧に出会うところからです。
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // ASTでは括弧を気にしないので、括弧をスキップするために
      // `current` をインクリメントすることにします。
      token = tokens[++current];

      // `CallExpression`タイプの基準ノードを作成し、開カッコの次のトークンが関数名なので、
      // そのnameを現在のトークンの値として設定することにします。
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // nameトークンをスキップするために、`current` を再度インクリメントします。
      token = tokens[++current];

      // そして今度は `CallExpression` の `params` となる各トークンを
      // 、閉括弧に出会うまでループさせたいと思います。
      //
      // ここで再帰が登場します。
      // 無限にネストされたノードのセットをパースする代わりに、
      // 再帰に頼って物事を解決しようとします。
      //
      // これを説明するために、Lispのコードを見てみましょう。
      // `add` のパラメータは数値と、その数値を含むネストした `CallExpression`
      // であることがわかると思います。
      //
      //   (add 2 (subtract 4 2))
      //
      // また、トークン配列の中で、複数の閉括弧があることに気づかれたと思います。
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< 閉括弧
      //     { type: 'paren',  value: ')'        }, <<< 閉括弧
      //   ]
      //
      // ネストされた `walk` 関数を使用して、ネストされた `CallExpression` を
      // リレーし `current` 変数をインクリメントすることができます。

      // そこで、 `while` ループを作成して、 `type` が `'paren'` で
      // `value` が閉じ括弧であるトークンに出会うまでループさせます。
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // `walk` 関数を呼び出して `node` を返し、それを `node.params` にプッシュします。
        node.params.push(walk());
        token = tokens[current];
      }

      // 最後にもう一度 `current` をインクリメントして、閉じ括弧をスキップします。
      current++;

      // そしてnodeを返します。
      return node;
    }

    // 再び、もし今までにトークン・タイプを読み込めなかった場合は、エラーを投げることになります。
    throw new TypeError(token.type);
  }

  // さて、これからASTを作成します。ASTは `Program` ノードをルートとします。
  let ast = {
    type: 'Program',
    body: [],
  };

  // `walk` 関数をキックスタートさせ、ノードを `ast.body` 配列にpushしていきます。
  //
  // ループの中でこれを行う理由は、このプログラムではネストさせる代わりに、
  // `CallExpression`を持つことができるからです。
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // パーサーの最後には、ASTを返します。
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * さて、これでASTができあがりました。
 * そして、ビジターを使ってさまざまなノードを訪問できるようにしたいと思います。
 * 型が一致するノードに遭遇したときに、ビジターのメソッドを呼び出せるようにする必要があります。
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// そこで、ASTとvisitorを受け取るトラバーサー関数を定義します。
// 内部では2つの関数を定義しています...
function traverser(ast, visitor) {

  // `traverseArray`関数は、配列に対して反復処理を行い、
  // 次に定義する関数 `traverseNode` を呼び出すことができます。
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode`は、`node` とその `parent` ノードを受け取ります。
  // そのため、ビジターのメソッドに両方を渡すことができます。
  function traverseNode(node, parent) {

    // `type`にマッチするメソッドがビジターに存在するかどうかをテストします
    let methods = visitor[node.type];

    // もし、このノードタイプに `enter` メソッドがあれば、 `node` と `parent` を使って呼び出します。
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // 次に、現在のノードの種類によって物事を分割していきます。
    switch (node.type) {

      // まずはトップレベルの `Program` から始めましょう。
      // Program ノードには body というプロパティがあり、
      // そこにはノードの配列が格納されているので、
      // `traverseArray` を呼び出してノードの中をトラバースしていきます。
      //
      // (`traverseArray` は順番に `traverseNode` を呼び出すので、
      // ツリーを再帰的にトラバースしていることに注意してください)
      case 'Program':
        traverseArray(node.body, node);
        break;

      // 次に `CallExpression` と同じようにして、それらの `params` をトラバースします。
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // NumberLiteral` と `StringLiteral` の場合は、訪問する子ノードがないので、そのままブレイクします。
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // そして再び、ノードの種類を認識していない場合は、エラーを投げることになります。
      default:
        throw new TypeError(node.type);
    }

    // もし、このノードタイプに `exit` メソッドがあれば、 `node` と `parent` を使ってそれを呼び出すことになります。
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 最後に、ASTのトップレベルには親がいないので、
  // `parent` のないastで `traverseNode` を呼び出してトラバーサーをキックスタートさせます。
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * 次は、トランスフォーマーです。
 * トランスフォーマーは構築したASTをトラバーサー関数に渡してビジターと一緒に新しいastを作成します。
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// そこで、lispのastを受け入れる変換関数を用意しました。
function transformer(ast) {

  // 前のASTと同じように、プログラムノードを持つ `newAst` を作成します。
  let newAst = {
    type: 'Program',
    body: [],
  };

  // 次に少しズルをして、ちょっとしたハックを作ってみようと思います。
  // 親ノードの `context` というプロパティを使って、ノードをその親の `context` にプッシュすることにします。
  // 通常であれば、これよりももっと良い抽象化ができるはずですが、
  // 我々の目的ではこれで物事をシンプルに保つことができます。
  //
  // ただ、コンテキストは、古いastから新しいastへの参照であることに注意してください。
  ast._context = newAst.body;

  // まず、トラバーサー関数をastとビジターで呼び出すことから始めます。
  traverser(ast, {

    // 最初のビジターのメソッドは、任意の `NumberLiteral` を受け入れる。
    NumberLiteral: {
      // これらに、訪問します。
      enter(node, parent) {
        // 同じく `NumberLiteral` という名前の新しいノードを作成して、
        // 親コンテキストにプッシュすることにします。
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // 次は `StringLiteral` です。
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // そして `CallExpression`です。
    CallExpression: {
      enter(node, parent) {

        // 新しいノード `CallExpression` を作成し、ネストした `Identifier` を作成します。
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // 次に、元の `CallExpression` ノードに新しいコンテキストを定義して、
        //  `expression` の引数を参照し、引数をプッシュできるようにします。
        node._context = expression.arguments;

        // 次に、親ノードが `CallExpression` であるかどうかを確認します。もしそうでなければ..
        if (parent.type !== 'CallExpression') {

          // `CallExpression` ノードを `ExpressionStatement` でラップします。
          // これはJavaScriptのトップレベルの `CallExpression` が実際にはステートメントであるからです。
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // 最後に、（おそらくラップされた） `CallExpression` を `parent` の `context` にプッシュします。
        parent._context.push(expression);
      },
    }
  });

  // トランスフォーマー関数の最後には、先ほど作成した新しいastを返します。
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * では、最後のフェーズに移りましょう。コード生成です。
 *
 * このコードジェネレータは、ツリーの各ノードを1つの巨大な文字列にプリントするために、自分自身を再帰的に呼び出そうとしているのです。
 */

function codeGenerator(node) {

  // ここでは、`node`の`type`で分けて説明します。
  switch (node.type) {

    // `Program`ノードがあるとします。
    // `body`の各ノードをマップしてコードジェネレータを通し、改行で結合します。
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // ExpressionStatement` では、
    // ネストされた式に対してコードジェネレータを呼び出し、セミコロンを追加します...
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...なぜなら、コードの正しさが好きだから)
      );

    //  CallExpression` では `callee` を表示して、開き括弧を追加し、
    // `arguments` 配列の各ノードをマップしてコードジェネレーターに通し、
    // カンマで結合し、閉括弧を追加します。
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // `Identifier` については、単に `node` の名前を返すことにします。
    case 'Identifier':
      return node.name;

    // `NumberLiteral` については、単に `node` の値を返すことにします。
    case 'NumberLiteral':
      return node.value;

    // `StringLiteral` については、 `node` の値をクォーテーションで囲むことにします。
    case 'StringLiteral':
      return '"' + node.value + '"';

    // そしてノードを認識していない場合は、エラーを投げます。
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * ついにコンパイラ関数を作成します。ここでは、パイプラインのすべての部分をリンクします。
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // 出力である返り値はシンプル!
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// そして、他のモジュールのためエクスポート！
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
